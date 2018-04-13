package routes

import (
	"database/sql"
	"log"
	"net/http"
	"pdk/server/models"

	"github.com/martini-contrib/render"
	"github.com/martini-contrib/sessions"
	"golang.org/x/crypto/bcrypt"
)

func LogIn(rnd render.Render, r *http.Request, db *sql.DB, session sessions.Session) {
	username := r.FormValue("username")
	password := r.FormValue("password")

	user, err := models.GetUserByUsername(username, db)
	if err != nil {
		log.Print(err)
		//неверный логин
		rnd.JSON(200, map[string]interface{}{"logged": false})
		return
	}
	err = bcrypt.CompareHashAndPassword(user.Hashpassword, []byte(password))
	if err != nil {
		//неверный пароль
		rnd.JSON(200, map[string]interface{}{"logged": false})
		return
	}
	rnd.JSON(200, map[string]interface{}{"logged": true})
}
