export const createIncidenceTable = `
CREATE TABLE IF NOT EXISTS incidence(
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    city VARCHAR(30) DEFAULT NULL,
    created_date datetime(6) DEFAULT NULL,
    gender VARCHAR(10) DEFAULT NULL,
    house_number VARCHAR(20) DEFAULT NULL,
    language VARCHAR(15) DEFAULT NULL,
    lga VARCHAR(60) DEFAULT NULL,
    phone_number VARCHAR(15) DEFAULT NULL,
    reporter_state VARCHAR(30) DEFAULT NULL,
    status VARCHAR(15) DEFAULT NULL,
    street VARCHAR(120) DEFAULT NULL,
    type VARCHAR(30) DEFAULT NULL,
    network VARCHAR(10) DEFAULT NULL,
    PRIMARY KEY(id)
  ) ENGINE=InnoDB AUTO_INCREMENT=2549 DEFAULT CHARSET=latin1;
`;

export const createIndex = `CREATE INDEX incidence_index ON incidence( id, 
  city, 
  created_date, 
  gender, 
  house_number,
  language,
  lga,
  phone_number,
  reporter_state,
  status,
  street,
  type,
  network
  );`;