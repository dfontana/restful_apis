# Restful Go
Stubbed framework for a rest api written in Go using Gorilla Mux and Handlers. Working towards mimicing my other example, [Restful Node](https://github.com/dfontana/restful_node). 

## Todo
- [x] Add starting point
- [x] Add configuration file
- [x] Break handlers into seperate package
- [x] Break models into seperate package
- [ ] Find a potentially better way to handle routes cleanly, potentially outside the api file.
- [ ] Add a mongoDB connection.
- [ ] Give handlers access to the data base connection
- [ ] Add models
- [ ] Update routes to reflect those in restful_node.
- [ ] Potentially remove `api.go` - is it needed when that information can be added to `server.go`, especially if the routes can be removed?
