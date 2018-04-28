package api

import (
	hlrs "handlers"
	"log"
	"models"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

// API holds the router and, eventually, the db connection
type API struct {
	Router *mux.Router
}

// Init the router and db connections for the api.
func (a *API) Init(config *config.Config) {
	//Build and open DB connection
	//Store into a.DB

	a.Router = mux.NewRouter()
	a.buildRoutes()
}

// buildRoutes for all routes available in this api.
func (a *API) setRoutes() {
	// TODO I wonder if handlers can export this. Each subpackge of handlers
	// would export the routes it opens to the parent package, then parent
	// would export the "master" to here.
	a.Router.HandleFunc("/", a.Ping).Methods("GET")
	a.Router.HandleFunc("/example/{number}", hlrs.GetExample).Methods("GET")
}

// Ping is a method, so we can pass extra parameters to our handler.
// TODO This is unpleasent. Instead use a global database connection object
// given to handlers, which means adding init() to the handler's common file.
// Then all files within the handlers package can access it.
func (a *API) Ping(w http.ResponseWriter, r *http.Request) {
	hlrs.ping(w, r)
}

// Run the API on the given port, injected with CORS middleware.
func (a *API) Run(port string) {
	a.Router.Handle("/", handlers.CORS())
	log.Fatal(http.ListenAndServe(port, handlers.CompressHandler(a.Router)))
}
