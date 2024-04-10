OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://api.themoviedb.org/3/authentication")
  .get()
  .addHeader("accept", "application/json")
  .addHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzgzM2Y1YWYwZGYzN2NiMzJlZWMzODNmZDY3MDBlYiIsInN1YiI6IjY2MTVmM2U0Mzk3ZGYwMDE3ZGM4YzA0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-oNPj8d96s08rtB6JLbcFxCXWF7pT_V2hkcxrMtHgqg")
  .build();

Response response = client.newCall(request).execute();