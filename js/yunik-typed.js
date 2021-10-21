
var typed = new Typed('.anim', {
    strings: 
    ['You',
     'Yunik'],
    
     backSpeed: 150,
     typeSpeed: 150,
     loop: false,
     smartBackspace: true,
     startDelay: 500,
     backDelay: 700,
    });
    
    function formatDate(userDate) {
        userDate = new Date(userDate);
        y = userDate.getFullYear().toString();
        m = (userDate.getMonth() + 1).toString();
        d = userDate.getDate().toString();
        if (m.length == 1) m = '0' + m;
        if (d.length == 1) d = '0' + d;
        return y + m + d;

      }

      console.log(formatDate)