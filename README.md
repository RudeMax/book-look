# Book Look

This project accessible via link https://rudemax.github.io/book-look

### 1. How long did you spend on the coding assignment?

I have spent 6 hours on this task. If I had more time I would add pagination or infinite scroll. The ability to create account in order to make a favourites list.

### 2. What was the mos useful feature that was added to the latest version of your chosen language?

In terms of React I would say the most useful features added (not that recent) are the hooks which allow to simplify the process and make the code more readable.

```
useEffect(() => {
		if (book?.isbn?.length) {
			checkCover(0);
		}
	}, [book]);
```

### 3. How would you track down a performance issue in production? Have you ever had to do this?

I would use browser developer tools, performance tab in particular to record and assess the actions, unfortunately I don’t have too much experience with it yet.

### 4. How would you improve the API that you have just used?

First thing that comes to my mind is covers, whenever there’s no cover it sends a default one which is just a pixel which I have to change to a custom default.

### 5. JSON about me:

```
{
   "id": 007,
   "name": "Max",
   "surname": "Rudenko",
   "phone": "416-520-05-38",
   "email": "rudenko.max.23@gmail.com",
   "address": {
     "country": "Canada",
     "province": "Ontario",
     "city": "Toronto",
   }
   "position": "Frontend developer",
   "hobby": "music",
   "description": "I am a passionate, willing to learn person who believes that we should develop and grow every day"
}
```
