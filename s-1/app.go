package main

import (
	// "net/http"
	//   "fmt"
	"time"
	"github.com/gin-gonic/gin"
)


type UserDetails struct {
	Slack_Name string `json:"slack_name"`
	Current_Day string `json:"current_day"`
	Utc_Time string `json:"utc_time"`
	Track string `json:"track"`
	Github_File_Url string `json:"github_file_url"`
	Github_Repo_Url string `json:"github_repo_url"`
	Status_Code int `json:"status_code"`
}


func handler(){
	router := gin.Default()

	router.GET("/user", func(c *gin.Context) {
		slack_name := c.Query("slack_name")
		track := c.Query("track")

		if slack_name == "" || track == ""{
			c.JSON(400, gin.H{
				"error": "Missing required parameters",
			})
			return
		}

		// Get the current UTC time
		currentUTC := time.Now().UTC().Format(time.RFC3339)

		// Get the current day of the week (0 = Sunday, 1 = Monday, ...)
		currentDay := time.Now().UTC().Weekday()

		// Format the day as a string
		currentDayString := currentDay.String()

		var response = UserDetails{
			Slack_Name: slack_name,
			Current_Day: currentDayString,
			Utc_Time: currentUTC,
			Track: isTrackEmp(track),
			Github_File_Url: "https://github.com/username/repo/blob/main/file_name.ext",
			Github_Repo_Url: "https://github.com/benrobo/hngx-be",
			Status_Code: 200,
		} 

		c.JSON(200, response)
	})
	router.Run() 
}

func isTrackEmp(str string) string {
    var track string
    if str == "" {
        track = "Backend"
    } else {
        track = str
    }
    return track
}

func main() {
    handler()
}