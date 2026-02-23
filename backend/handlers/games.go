package handlers

import(
	"database/sql"
	"eneba-backend/db"
	"eneba-backend/models"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func ListGames(c *gin.Context) {
	search := c.Query("search")

	var rows *sql.Rows
	var err error

	query :=`SELECT id, name, platform, region, price, 
		discount, final_price, cashback, likes, image_url
		FROM games`

	if search != "" {
		searchTerm := "%" + strings.ToLower(search) + "%"
		query += ` WHERE
				to_tsvector('english', name || ' ' || platform || ' ' || region)
				@@ plainto_tsquery('english', $1)
			OR name ILIKE $2
			OR similarity(name, $1) > 0.3
			ORDER BY
				similarity(name, $1) DESC`
		rows, err = db.DB.Query(query, search, searchTerm)
	} else {
		rows, err = db.DB.Query(query)
	}
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch games"})
		return
	}
	defer rows.Close()

	games := make([]models.Game, 0)

	for rows.Next() {
		var game models.Game
		err := rows.Scan(
			&game.ID, &game.Name, &game.Platform, &game.Region,
			&game.Price, &game.Discount, &game.FinalPrice,
			&game.Cashback, &game.Likes, &game.ImageUrl,
		)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan game"})
			return
		}
		games = append(games, game)
	}
	c.JSON(http.StatusOK, games)
}