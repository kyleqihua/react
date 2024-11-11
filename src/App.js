import React from "react";
// import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
// const root = ReactDOM.createRoot(document.getElementById("root"));

// let counterVar = 0;

// const handleClick = () => {
// 	counterVar = counterVar + 1;
// 	console.log(counterVar);
// 	// Force a re-render by calling root.render again
// 	// const root = ReactDOM.createRoot(document.getElementById("root"));
// 	root.render(
// 		<React.StrictMode>
// 			<App />
// 		</React.StrictMode>
// 	);
// };

function App() {
	const [counterState, setCounterState] = useState(0);

	// new try 241109
	let count = 0; // Define a regular variable, initialized to 0

	// State to trigger re-render
	const [renderCount, setRenderCount] = useState(0);
	const [countState, setCountState] = useState({ value: 0 });

	useEffect(() => {
		console.log("4. 渲染后的新值:", countState.value);
	}, [countState]);

	// could not understand why use useeffect, since the first console log and the second console log will log the same object reference.
	// console.log("New render object reference:", countState);
	// useEffect(() => {
	// 	console.log("状态已更新:", countState);
	// }, [countState]);

	// Function to increase both count and renderCount
	// this function does not get called in the first render
	// it gets called after the button was clicked, and the count was increased, and the renderCount was updated, and the change of the state variable also triggered a re-render of the whole component (the second render)
	// in the second render, or the second function call, the count was assigned to 0 again, and what is inside of the increaseCount will not execute, and thus {count} will still be 0, but the renderCount was updated to 1
	// this process will repeat every time the button is clicked
	const increaseCount = () => {
		count += 1; // Increase the regular variable `count`
		console.log("Count before rendering:", count); // Log the count before re-render
		setRenderCount(renderCount + 1); // Update state to trigger re-render
	};

	// console.log("Count after rendering:", count);
	// Log the count after every render (including the first one with its initial value of 0)

	const increaseCountState = () => {
		// console.log("Previous count object:", countState);
		// console.log("Previous count object:", countState);

		// 创建新的 state 对象
		// setCountState({ value: countState.value + 1 });
		// setCountState({ value: countState.value + 1 });
		// setCountState({ value: countState.value + 1 });
		console.log("=== 开始状态更新 ===");
		console.log("1. 当前值:", countState.value); // 0

		setCountState((prevState) => {
			console.log("2. 计算更新时的值:", prevState.value); // 0
			return { value: prevState.value + 1 }; // 计算新值 1
		});

		console.log("3. 函数执行完但还未重新渲染:", countState.value); // 仍然是 0

		// 4. 使用setTimeout来查看下一个事件循环中的值;
		// setTimeout(() => {
		// 	console.log("3. 下一个事件循环中的值:", countState); // {value: 1}
		// }, 3000);

		// console.log("New count object:", { value: countState.value + 1 });
	};

	setTimeout(() => {
		console.log("3. 下一个事件循环中的值:", countState); // {value: 1}
	}, 0);

	// both this console log and the useEffect will log the same object reference. and i now know that, though i am still not familiar with the usage of useEffect.
	// console.log("New render object reference:", countState);
	// // 每次渲染时记录对象
	// useEffect(() => {
	// 	console.log("New render object reference:", countState);
	// }, [countState]);

	return (
		<>
			<div>
				<p>Count State: {countState.value}</p>
				<button onClick={increaseCountState}>Increase Count</button>
			</div>
			<div>
				<p>普通变量 count 的值: {count}</p>
				<p>
					in the browser console, you can see that the count's value got updated
					to 1 after the click, but was assigned to 0 after the re-render (ie,
					the next function call). it shows that the value of normal variable
					cannot persist. that is why we need state variable, in addition to its
					ability to trigger render.
				</p>
				<p>重新渲染的次数: {renderCount}</p>
				<button onClick={increaseCount}>增加计数</button>
			</div>
			{/* <h1>Why state?</h1>
			<p>
				A static screen is not fun. Think about the old-days newspaper. You want
				something that changes. A changing screen like the television can be
				fun, but the internet has more to offer. It says that the changes react
				to you! Right, you matter for the changes.
			</p>
			<p>
				Something need to vary if it wants to change. That is, it should be a
				variable. Okay, let's declare a variable and use it right now.
			</p>
			<p>
				This is a variable, with the name of counterVar, the initialvalue of 0:{" "}
				<span style={{ backgroundColor: "skyblue" }}>{counterVar}</span>
			</p>
			<p>
				How to change the value of the variable? We can reassign the value. But
				here we need to change the keyword of const to let.
			</p>
			<p>
				Still, there is no user action yet. Let's have a click action, to let
				the value changing in the variable to react to
			</p>
			{/* <button onClick={handleClick}>Click me</button> */}
			{/* <p>
				However, after cliking the button, you will find that the number of the
				screen does not change. But if you open the console in the browser, you
				can see that the value has already been updated. Yet, the concept of
				variable is not enough for the task of changing in the screen.
			</p>
			<p>
				Beyond the tedious reassigning the value, we can use the state to handle
				the changing.
			</p>
			<p>
				Here is the state, with the name of counterState, the initialvalue of 0:{" "}
				<span style={{ backgroundColor: "skyblue" }}>{counterState}</span>
			</p>
			<button onClick={() => setCounterState(counterState + 1)}>
				Click me
			</button>{" "}
			*/}

			{/* <button
				onClick={function () {
					setCounterState(counterState + 1);
				}}
			>
				Click me
			</button> */}
		</>
	);
}

export default App;
