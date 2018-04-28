package handlers

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"net/http"
)

func Ping(w http.ResponseWriter, r *http.Request) {
	sendJSON(w, http.StatusOK, map[string]string{"msg": "Hello, World!"})
}
