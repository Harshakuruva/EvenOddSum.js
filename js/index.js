function Evenodd(arr,n)
{
	let even = 0;
	let odd = 0;
	for (let i = 0; i < n; i++)
	{
	
		// Loop to find even, odd sum
		if (i % 2 == 0)
			even += arr[i];
		else
			odd += arr[i];
	}
return[even,odd]
}

	let arr = [ 1, 2, 3, 4];
	let n = arr.length;

	Evenodd(arr, n);
console.log(Evenodd(arr,n))
	
	
