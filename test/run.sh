#!/bin/bash
echo "************************"
echo "Testing Four in Row Game......"
echo "************************"
NOW=$(date  +%d-%m-%y-%H:%M) && ./node_modules/mocha/bin/mocha  test/*.js --timeout 100000 --reporter mochawesome --reporter-options enableCode=false, reportFilename=test-${NOW}
echo "************************"
echo "Killing background processes..."
echo "************************"
jobs -p | xargs -I {} kill {}