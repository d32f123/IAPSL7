#!/bin/sh

cd ../..
asadmin start-domain --domaindir . lab7
cd lab7/docroot
asadmin --port 31348 deploy --force lab7.war
