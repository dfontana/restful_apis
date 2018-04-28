package handlers

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"net/http"
)

func GetExample(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	number := vars["number"]

	//Do something with number

	if number < 0 {
		sendError(w, http.StatusNotFound, "Invalid Number.")
	} else {
		sendJSON(w, http.StatusOK, map[string]string{"example": number})
	}
}
