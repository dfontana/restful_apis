package handlers

import (
	"encoding/json"
	"net/http"
)

// sendJSON with the given payload
func sendJSON(w http.ResponseWriter, status int, payload interface{}) {
	reponse, err := json.Marshal(payload)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	w.Write([]byte(response))
}

// sendError with the given message
func sendError(w http.ResponseWriter, status int, msg string) {
	sendJSON(w, status, map[string]string{"error": msg})
}
