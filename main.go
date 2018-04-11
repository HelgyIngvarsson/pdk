package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./assets/html/index.html")
	})
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("./assets/js"))))

	port, _ := determineListenAddress()

	http.ListenAndServe(port, nil)
}

func determineListenAddress() (string, error) {
	port := os.Getenv("PORT")
	if port == "" {
		return "", fmt.Errorf("$PORT not set")
	}
	return ":" + port, nil
}
