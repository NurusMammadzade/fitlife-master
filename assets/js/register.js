        const wrapper = document.querySelector(".wrapper");
        const signup = document.querySelector(".signUp");
        const login = document.querySelector(".logIn");

        const formSignUp = document.querySelector(".formSignUp");
        const signupCheck = document.querySelector("#signupCheck");

        const signupHeader = document.querySelector(".signup header");
        const loginHeader = document.querySelector(".login header");
         

        loginHeader.addEventListener("click", () => {
          wrapper.classList.add("active");
        });
        signupHeader.addEventListener("click", () => {
          wrapper.classList.remove("active");
        });
                   
        
      signup.addEventListener("click", () => {
          location.href = "./index.html#home";
      });


      login.addEventListener("click", () => {
          location.href = "./index.html#home";
      });


        //   const elementFullNameRegister = document.querySelectorAll("[type=text]")[0];
        //   const elementEmailRegister = document.querySelectorAll("[type=text]")[1];
        //   const elementPassRegister = document.querySelectorAll("[type=password]")[0];
          

        //   const elementFullNameLogin = document.querySelectorAll("[type=text]")[2];
        //   const elementPassLogin = document.querySelectorAll("[type=password]")[1];
          

        //   signup.addEventListener("click", () => {
        //     if(elementFullNameRegister.value !== "" && elementFullNameRegister.value !== null){
        //       if(elementEmailRegister.value !=="" && elementEmailRegister.value !== null){
        //         if(elementPassRegister.value !== "" && elementPassRegister.value !== null){
        //           location.href = "./index.html#home";
        //         }
        //       }
        //     }else{
        //       preventDefault();
        
        //     }
        // });


      login.addEventListener("submit", () => {
          location.href = "./index.html#home";
      });