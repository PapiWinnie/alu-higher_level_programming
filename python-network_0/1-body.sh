#!/bin/bash
#Bash script takes in a URL and sends a GET request to the URL, then displays the response
curl -sfL "$1" -X GET