#Digital Fishing Licensing for kids events

Initial prototype for digital creation of children's fishing licenses

API enpoints:

/api/v1/licensing
POST licence data

Notes:

Change license code and date of issue from input to remove react warnings about controlled vs uncontrolled inputs

Change licence code allocation to reserve the unique ID in db (send a placeholder that is deleted on cancel, updated on submit?; periodically remove placeholders to remove ones left when navigated away from?)
