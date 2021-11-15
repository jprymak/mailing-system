export function createRecord(name, email){
return {
    records: [
        {
          "fields": {
            "Name": name,
            "Email": email
          }
        },
      ],
}
}