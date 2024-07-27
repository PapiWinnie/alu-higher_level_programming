#!/bin/bash
#Bash script that DELETE request to the URL and passes it as the first argument and then displays the body of the response
curl -s "$1" -X DELETE