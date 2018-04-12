package routes

import (
	"database/sql"
	"log"
	"pdk/server/models"

	"github.com/martini-contrib/render"
	"github.com/martini-contrib/sessions"
)

func GetArticles(rnd render.Render, db *sql.DB) {
	articles, err := models.GetAllArticles(db)
	if err != nil {
		log.Print(err)
		return
	}
	rnd.JSON(200, map[string]interface{}{"articles": articles})
}

func GetAnonses(rnd render.Render, db *sql.DB, session sessions.Session) {
	anonses, err := models.GetAllAnonses(db)
	if err != nil {
		log.Print(err)
		return
	}
	rnd.JSON(200, map[string]interface{}{"anonses": anonses})
}
