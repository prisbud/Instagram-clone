import {getProviders, signIn as SignInToProvider} from "next-auth/react";

function signIn({providers}) {
    return(
       <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignInToProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    
    </div>
    )
}

export async function getServerSideProps(){
    const providers = await getProviders();

    return {
        props: {
            providers,
        }
    }
}

export default signIn