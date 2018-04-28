package main

import (
	"api"
	"config"
)

func main() {
	config := config.LoadConfig()
	api := &api.Api{}
	api.Init(config)
	api.Run(config.port)
}
