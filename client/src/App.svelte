{message}
<br>
<button on:click={getCookiesHandler}>Get cookies</button>

<form on:submit={setCookieHandler}>
    <input type="text" placeholder="Name" bind:value={name}>
    <input type="text" placeholder="Value" bind:value={value}>

    <input type="submit" value="Submit">
</form>

<script>
   let message = ''

   const getCookiesHandler= async event => {
     const res = await fetch('http://localhost:3000/getcookies', {credentials: 'include'})
     message = await res.text()
   }

   let name = ''
   let value = ''
   
   const setCookieHandler = async event => {
      event.preventDefault()

      await fetch(`http://localhost:3000/setcookie`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({name, value}),
         credentials: 'include'
      })

      name = ''
      value = ''
   }
</script>