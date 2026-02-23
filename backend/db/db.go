package db

import (
	"database/sql"
	"log"
	"os"
	"time"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func InitDB() {
	connStr := os.Getenv("DATABASE_URL")
	if connStr == "" {
		log.Fatal("DATABASE_URL environment variable not set")
	}

	log.Printf("Connecting to database...")

	var err error
	DB, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Failed to open database:", err)
	}

	// Simple retry loop - 5 attempts, 2 seconds apart
	for i := 0; i < 5; i++ {
		err = DB.Ping()
		if err == nil {
			log.Println("Database connected successfully!")
			return
		}
		log.Printf("Waiting for database... (attempt %d/5): %v", i+1, err)
		time.Sleep(2 * time.Second)
	}

	log.Fatal("Failed to connect to database after 5 attempts")
}