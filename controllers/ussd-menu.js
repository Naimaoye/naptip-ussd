import { readJson } from '../utils/readJson';


export default class Ussd {
    static async registerUssdDetails(res) {
    readJson(res, (obj)=> {
        const { text } = obj
        if(text == "" || text == "1*00" || text == "2*00"){
            console.log('here', text);
        let response = `CON This is the NAPTIP VAPP Reporter, kindly select your Gender. Enter 1 or 2 to proceed:
                1. Male
                2. Female
                `;
             res.writeStatus("200 OK").write(response);
            } else if(text == "1" || text == "2"||text == "1*1*00" || text == "1*2*00" || text == "1*3*00" 
            || text == "1*4*00" || text == "1*5*00" || text == "2*1*00" || text == "2*2*00" 
            || text == "2*3*00" || text =="2*4*00" || text == "2*5*00"){
                console.log('here', text)
                let response = `CON Kindly select the incidence you will like to report. Enter 1,2,3,4,5 to proceed:
                1. Rape
                2. Violence
                3. Human Trafficking
                4. Child labour
                5. Others
                00. Back
                `;
                res.writeStatus("200 OK").write(response);
            } else if(text == "1*1" || text == "1*2" || text == "1*3" 
            || text == "1*4" || text == "1*5" || text == "2*1" || text == "2*2" 
            || text == "2*3" || text =="2*4" || text == "2*5"||text == "1*1*1*00" || text == "1*2*1*00" || text == "1*3*1*00" 
            || text == "1*4*1*00" || text == "1*5*1*00" || text == "2*1*1*00" || text == "2*2*1*00" 
            || text == "2*3*1*00" || text =="2*4*1*00" || text == "2*5*1*00"){
                let response = `CON Please select the first letter of your resident state:
                1. A-B
                2. C-I
                3. J-L
                4. N-R
                5. S-Z
                00. Back
                `;
                res.cork(() => { res.writeStatus("200 OK").write(response); });
            } else if(text == "1*1*1" || text == "1*2*1" || text == "1*3*1" 
            || text == "1*4*1" || text == "1*5*1" || text == "2*1*1" || text == "2*2*1" 
            || text == "2*3*1" || text =="2*4*1" || text == "2*5*1"){
                let response = `CON Please select your resident state:
                1. Abia
                2. Adamawa
                3. Akwa Ibom
                4. Anambra
                5. Bauchi
                6. Bayelsa
                7. Benue
                8. Borno
                00. Back
                `;
                res.cork(() => { res.writeStatus("200 OK").write(response); });

            }  else if(text == "1*1*2" || text == "1*2*2" || text == "1*3*2" 
            || text == "1*4*2" || text == "1*5*2" || text == "2*1*2" || text == "2*2*2" 
            || text == "2*3*2" || text =="2*4*2" || text == "2*5*2"){
                let response = `CON Please select your resident state:
                1. Cross River
                2. Delta
                3. Ebonyi
                4. Edo
                5. Ekiti
                6. Enugu
                7. Gombe
                8. Imo
                00. Back
                `;
                res.cork(() => { res.writeStatus("200 OK").write(response); });

            } else if(text == "1*1*3" || text == "1*2*3" || text == "1*3*3" 
            || text == "1*4*3" || text == "1*5*3" || text == "2*1*3" || text == "2*2*3" 
            || text == "2*3*3" || text =="2*4*3" || text == "2*5*3"){
                let response = `CON Please select your resident state:
                1. Jigawa
                2. Kaduna
                3. Kano
                4. Katsina
                5. Kebbi
                6. Kogi
                7. Kwara
                8. Lagos
                00. Back
                `;
                res.cork(() => { res.writeStatus("200 OK").write(response); });

            } else if(text == "1*1*4" || text == "1*2*4" || text == "1*3*4" 
            || text == "1*4*4" || text == "1*5*4" || text == "2*1*4" || text == "2*2*4" 
            || text == "2*3*4" || text =="2*4*4" || text == "2*5*4"){
                let response = `CON Please select your resident state:
                1. Nasarawa
                2. Niger
                3. Ogun
                4. Ondo
                5. Osun
                6. Oyo
                7. Plateau
                8. Rivers
                00. Back
                `;
                res.cork(() => { res.writeStatus("200 OK").write(response); });

            } else if(text == "1*1*5" || text == "1*2*5" || text == "1*3*5" 
            || text == "1*4*5" || text == "1*5*5" || text == "2*1*5" || text == "2*2*5" 
            || text == "2*3*5" || text =="2*4*5" || text == "2*5*5"){
                let response = `CON Please select your resident state:
                1. Sokoto
                2. Taraba
                3. Yobe
                4. Zamfara
                00. Back
                `;
                res.cork(() => { res.writeStatus("200 OK").write(response); });

            }
            res.end();
        }, () => {
            /* Request was prematurely aborted or invalid or missing, stop reading */
            console.log('Invalid JSON or no data at all!');
          });
    }
}


