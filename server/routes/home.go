package routes

import (
	"database/sql"
	"log"
	"pdk/server/models"

	"github.com/martini-contrib/render"
)

func GetArticles(rnd render.Render, db *sql.DB) {
	articles, err := models.GetAllArticles(db)
	if err != nil {
		log.Print(err)
		return
	}
	rnd.JSON(200, map[string]interface{}{"articles": articles})
}
