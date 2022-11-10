request({
  method: 'GET',
  url: 'https://apichallenges.herokuapp.com/todos',
  headers: {
    'X-CHALLENGER': 'fad9db5c-66b7-4d3d-a041-99171f988478',
  },
}).then((board) => {
  console.log(board.status) // 201
  console.log(board.body)
})
