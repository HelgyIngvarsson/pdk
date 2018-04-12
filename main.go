package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"pdk/server/models"
	"pdk/server/routes"

	"github.com/go-martini/martini"
	"github.com/martini-contrib/render"
	"github.com/martini-contrib/sessions"
)

func main() {
	//connection pool for database
	db, err := models.NewDB("postgres://jsopcnfzumgznz:20807490dae09e58991e7a56179e659d80a9169bafbba8b01bb996464fed4347@ec2-107-22-175-33.compute-1.amazonaws.com:5432/db56m8m3hnlru2")
	if err != nil {
		log.Panic(err)
	}

	m := martini.Classic()
	//handle '/' addr
	m.Get("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./assets/html/index.html")
	})
	m.Use(martini.Static("assets")) //use static file server for Angular
	staticOptionsResources := martini.StaticOptions{Prefix: "resources"}
	m.Use(martini.Static("resources", staticOptionsResources))

	m.Map(db) //Injecting database connection struct

	store := sessions.NewCookieStore([]byte("secret01121996"))
	m.Use(sessions.Sessions("auth_session", store))
	//rendering
	m.Use(render.Renderer(render.Options{
		Charset:    "UTF-8", // Sets encoding for json and html content-types. Default is "UTF-8".
		IndentJSON: true,    // Output human readable JSON
		IndentXML:  true,    // Output human readable XML
	}))

	m.Get("/api/getArticles", routes.GetArticles)
	m.Get("/api/getAnonses", routes.GetAnonses)

	port, err := determineListenAddress()
	if err != nil {
		m.Run() //run on default port
	} else {
		m.RunOnAddr(port) //run on determine port
	}
}

//function checking environment variable PORT
func determineListenAddress() (string, error) {
	port := os.Getenv("PORT")
	if port == "" {
		return "", fmt.Errorf("$PORT not set")
	}
	return ":" + port, nil
}
