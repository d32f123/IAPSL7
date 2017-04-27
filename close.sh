#!/bin/sh

asadmin --port 31348 undeploy lab7
cd ../..
asadmin stop-domain --domaindir . lab7
cd lab7/docroot 
