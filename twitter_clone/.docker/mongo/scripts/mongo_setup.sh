#!/bin/bash

echo "sleeping for 15 seconds"
sleep 15s

echo mongo_setup.sh time now: `date +"%T" `
mongosh --host mongo:27017 <<EOF
  var cfg = {
    "_id": "rs0",
    "version": 1,
    "members": [
      {
        "_id": 0,
        "host": "mongo:27017",
      }
    ]
  };
  rs.initiate(cfg);

  use admin

  db.createUser({
    user: "root",
    pwd: "root",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  });

  db.isMaster();
  rs.conf();
  rs.status();

EOF

echo "Finish"

sleep 100000
