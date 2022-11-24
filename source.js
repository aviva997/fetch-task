// syntax error  is sysntax befure we load the code 

const getData = async()=>{
    try{
        const response = await fetch('https://data.gov.il/api/action/datastore_search?resource_id=3f06e2f2-e2ad-41ac-9665-37d0625537f2&limit=400');
        const data = await response.json();// await becuse the response
        const school = data.result.records;
 
    school.map(school =>{
        const tr = document.createElement('tr');

        const school_name = document.createElement('td');
        const school_manager = document.createElement('td');
        const school_city = document.createElement('td');
        const school_adress = document.createElement('td');
        const school_phone = document.createElement('td');

        school_name.append(school.shem_beit_sefer);
        school_manager.append(school.menahel);
        school_city.append(school.ezor);
        school_adress.append(school.ktovet);
        school_phone.append(school.telefon);
        tr.append(school_name,school_manager,school_city,school_adress,school_phone )

        const tbody = document.querySelector('tbody');
        tbody.appendChild(tr)
    })

    const input = document.querySelector('#search_bar');
    input.addEventListener('keyup', ()=>{
        const new_school = school.filter( (school) =>{ 
            return school.shem_beit_sefer.includes(input.value)|| school.menahel.includes(input.value)||school.ezor.includes(input.value)
        })
        document.querySelector('tbody').innerHTML = ''
        new_school.map(school =>{
            const tr = document.createElement('tr');
    
            const school_name = document.createElement('td');
            const school_manager = document.createElement('td');
            const school_city = document.createElement('td');
            const school_adress = document.createElement('td');
            const school_phone = document.createElement('td');
    
            school_name.append(school.shem_beit_sefer);
            school_manager.append(school.menahel);
            school_city.append(school.ezor);
            school_adress.append(school.ktovet);
            school_phone.append(school.telefon);
            tr.append(school_name,school_manager,school_city,school_adress,school_phone )
    
            const tbody = document.querySelector('tbody');
            tbody.appendChild(tr)
        })
    })
    }catch(e){
        console.log(e)
    }

    
}
getData()