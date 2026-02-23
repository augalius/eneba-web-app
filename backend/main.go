package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"eneba-backend/db"
	"eneba-backend/handlers"
)

func main() {
	db.InitDB()

	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	router.GET("/list", handlers.ListGames)

	router.Run(":8080")
}