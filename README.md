<h3><a href="#github-user-search">[Mobile] Github user search</a></h3>
<h3><a href="#quiz">[Mobile] Quiz</a></h3>
<h3><a href="#fizzbuzz">[Algo] Fizzbuzz</a></h3>

# Github user search

Follow these steps to set up the project locally.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/YassMaldini/fulll-hiring.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run a development build locally
   ```sh
   npm run android|ios
   ```

### Test

#### Unit tests (Jest)

```sh
npm run test
```

#### E2E tests (Detox)

Follow the steps from the following url to make your environment ready to run Detox: https://wix.github.io/Detox/docs/introduction/environment-setup#detox-prerequisites

```sh
npm run e2e:android|ios:build|test
```

For example the command to create a build for an ios simulator would be:

```sh
npm run e2e:ios:build
```

And the command to run the e2e tests once the build is created:

```sh
npm run e2e:ios:test
```

# Quiz

1. What would return the following code?

```jsx
class Content extends React.Component {
  render() {
    return (
      <>
        <Text>Hello</Text>
        <Text>World</Text>
      </>
    );
  }
}

class Container extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Content />
        </View>
      </ScrollView>
    );
  }
}
```

- B
	```jsx
	<ScrollView>
	  <View>
	    <Text>Hello</Text>
	    <Text>World</Text>
	  </View>
	</ScrollView>
	```

2. Which reducer code do not follow best practices?

- A
	```ts
	case ADD_USERID:
	    state.users.push[4];
	    return state;
	```

3. Which reducer code is correct?

- C) 
	```ts
	case USER_SET_DATA:
	  const { data } = action
	  const authType = await getAuthType(data.token)
	
	  return { ...state, data, authType, loading: false }
	```

4. A higher-order component is a function that:

	- A) takes a component and returns a new component

5. What is "windowing"?

	- B) a technique to render a small subset of a larger dataset

6. Which methods are not usable with React hooks?

	- B) componentWillUnmount
	- C) componentDidUpdate

7. Which status code is not an error?

	- D) 200

8. Use Typescript to describe the following function which returns a success message when the request has been successfully sent, returns a code status when the request has failed.

	```ts
   async function registerUser(name: string, age: number): Promise<string | number> {
    
      const response = await fetch(`http://some-api.com/register`, {
        method: "POST",
        body: JSON.stringify({ name, age })
      });
    
      try {
        if (response.ok) {
          return "Request successfully sent";
        } else {
          return response.status;
        }
      } catch (error) {
        return 500;
      }
  
    }

	/* Usage */ 
	const messageOrCodeStatus = await registerUser("Laurent", 35);
	```

9. What is the main difference between queries and mutations in GraphQL? Queries are used to get data and fields are executed in parallel; mutations are used to create, edit or delete data and executed serially for the top-level fields.

10. What does not permit to interact with servers within React Native project?

- C) SwiftUI

# Fizzbuzz

```js
const N = 30

function fizzbuzz(len) {
  return [...Array(len)].map((_, num) => {
    num += 1;

    if (isDivisible(num, 3) && isDivisible(num, 5)) {
      console.log("FizzBuzz");
      return "FizzBuzz";
    } else if (isDivisible(num, 3)) {
      console.log("Fizz");
      return "Fizz";
    } else if (isDivisible(num, 5)) {
      console.log("Buzz");
      return "Buzz";
    } else {
      console.log(num);
      return num;
    }
  });
}

function isDivisible(num, divisor) {
  return num % divisor === 0
}

fizzbuzz(N)
```
