export function createSubscriberRecord(name, email){
return {
    records: [
        {
          "fields": {
            "Name": name,
            "Email": email,
          }
        },
      ],
}
}

export function createCampaign(subject, content, status){
  return {
      records: [
          {
            "fields": {
              "Subject": subject,
              "Content": content,
              "Status": status,
            }
          },
        ],
  }
  }