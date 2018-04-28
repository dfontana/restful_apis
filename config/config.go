package config

// Config holding server and database information
type Config struct {
	port string
	db   *DBConfig
}

// DbConfig for the database this server accesses
type DbConfig struct {
	user string
	pass string
	url  string
	port string
}

// LoadConfig for this server.
func LoadConfig() *Config {
	return &Config{
		port: ":8080",
		db: &DBConfig{
			user: "test",
			pass: "test",
			url:  "test",
			port: "test",
		},
	}
}
