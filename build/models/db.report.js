"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createIncidenceTable = void 0;
var createIncidenceTable = "\nCREATE TABLE IF NOT EXISTS incidence(\n    id MEDIUMINT NOT NULL AUTO_INCREMENT,\n    city VARCHAR(30) DEFAULT NULL,\n    created_date datetime(6) DEFAULT NULL,\n    gender VARCHAR(10) DEFAULT NULL,\n    house_number VARCHAR(20) DEFAULT NULL,\n    language VARCHAR(15) DEFAULT NULL,\n    lga VARCHAR(60) DEFAULT NULL,\n    phone_number VARCHAR(15) DEFAULT NULL,\n    reporter_state VARCHAR(30) DEFAULT NULL,\n    status VARCHAR(15) DEFAULT NULL,\n    street VARCHAR(120) DEFAULT NULL,\n    type VARCHAR(30) DEFAULT NULL,\n    network VARCHAR(10) DEFAULT NULL,\n    PRIMARY KEY(id)\n  ) ENGINE=InnoDB AUTO_INCREMENT=2549 DEFAULT CHARSET=latin1;\n"; //export const createIndex = `CREATE INDEX incidence_index ON incidence(id,city,created_date,gender,house_number,language,lga,phone_number,reporter_state,status,street,type,network);`;

exports.createIncidenceTable = createIncidenceTable;
//# sourceMappingURL=db.report.js.map