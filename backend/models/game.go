package models

type Game struct {
	ID int `json:"id"`
	Name string `json:"name"`
	Platform string `json:"platform"`
	Region string `json:"region"`
	Price float64 `json:"price"`
	Discount int `json:"discount"`
	FinalPrice float64 `json:"final_price"`
	Cashback float64 `json:"cashback"`
	Likes int `json:"likes"`
	ImageUrl string `json:"image_url"`
}