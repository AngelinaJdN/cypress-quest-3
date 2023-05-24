describe('API NOTES', () => {
  it('Login normal', function() {
    cy.login();
  });

  it('Voir mes notes', function() {
    cy.request({
      url: 'https://practice.expandtesting.com/notes/api/notes',
      method: 'GET',
      headers: {
        accept: "application/json",
        "x-auth-token": "167a4de6ee214a0bac5248f75718c4543a59062432cb4f1fa1b116b817b594e7"
      }
    })
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('Notes successfully retrieved');
        expect(response.body.data).to.have.lengthOf(9);
      });
  });

  it('Créer une note', () => {
    cy.fixture("notes").then((note) => {
      cy.request({
        url: 'https://practice.expandtesting.com/notes/api/notes',
        headers: {
          accept: "application/json",
          "x-auth-token": "167a4de6ee214a0bac5248f75718c4543a59062432cb4f1fa1b116b817b594e7"
        },
        body: {
          title : note.title,
          description : note.description,
          category : note.category,
        }
      }) 
      .then((response) => {
        expect(response.status).to.eql(200);
      });
    });
  });
});