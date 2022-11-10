describe('Test', () => {
  // apichallenges
  it('First Real Challenge', () => {
    cy.request({
      method: 'GET',
      url: 'https://apichallenges.herokuapp.com/challenges',
      headers: {
        'X-CHALLENGER': 'fad9db5c-66b7-4d3d-a041-99171f988478',
      },
    })
  })

  it('GET /todos', () => {
    cy.request({
      method: 'GET',
      url: 'https://apichallenges.herokuapp.com/todos',
      headers: {
        'X-CHALLENGER': 'fad9db5c-66b7-4d3d-a041-99171f988478',
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('todos')
    })
  })

  //example cypress.io
  it('GET cypress.io', () => {
    cy.request({
      method: 'GET',
      url: 'https://example.cypress.io',
    })
  })

  it('POST .then', () => {
    cy.request({
      method: 'GET',
      url: 'https://example.cypress.io',
    }).then((board) => {
      console.log(board.status) // 201
      console.log(board.body)
    })
  })

  it('xmlhttpRequest', () => {
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        callbackFunction(this.responseText)
      }
    }

    xhttp.open('POST', 'https://apichallenges.herokuapp.com/challenger')
    xhttp.send()

    function callbackFunction(data) {
      console.log(data)
    }
  })

  it('xmlhttpRequest with fetch', () => {
    const response = fetch(
      'https://apichallenges.herokuapp.com/challenger',
      'POST'
    ).then((data) => {
      console.log(data)
      console.log(data.text())
    })
  })

  it('POST .then', () => {
    cy.request({
      method: 'GET',
      url: 'https://example.cypress.io',
    }).then((board) => {
      console.log(board.status) // 201
      console.log(board.body)
    })
  })
})
