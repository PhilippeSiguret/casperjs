	casper.start('http://www.linkedin.com', function(){
		console.log("page loaded");
		this.fill('form#login',{
			session_key: 'philippe@mon-administrateur-informatique.com'
			session_password: 'recrutop'
		},true);
