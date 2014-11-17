<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laravel Rest Inteface with Backbone handdling the front</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="/css/style.css" type="text/css" />
    <link rel="stylesheet" href="/css/animate.css" type="text/css" />
   
</head>
<body>
    <div class="welcome">
       
        <h1>App</h1>
        <div id="myElement" class="animate-leave">
            <h1 id="designers">Designers:</h1>
            <a id="navigateToAdd">Create a new designer</a>
            <table class="table">
                  <thead>
                        <tr>
                          <th>Name </th>
                          <th>Age </th>
                          <th>Task </th>
                          <th>Completed </th>
                          <th>Update </th>
                          <th>Delete </th>
                        </tr>
                  </thead>
                  <tbody class="designersList">
                  </tbody>
             </table>
        </div>
        <div id="myElementAdd"></div>
       
    </div>
    <script src="/superlibs/box/require/2.1.6/require.js"></script>
    <script src="/main.js"></script>
    <script src="app.js"></script>   
   
</body>
</html>
