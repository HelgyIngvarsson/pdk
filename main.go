package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/go-martini/martini"
	"github.com/martini-contrib/sessions"
)

func main() {
	m := martini.Classic()
	//handle '/' addr
	m.Get("/**", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./assets/html/index.html")
	})
	m.Use(martini.Static("assets")) //use static file server for Angular
	m.Use(martini.Static("angular"))
	staticOptionsResources := martini.StaticOptions{Prefix: "resources"}
	m.Use(martini.Static("resources", staticOptionsResources))

	store := sessions.NewCookieStore([]byte("secret01121996"))
	m.Use(sessions.Sessions("auth_session", store))

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
