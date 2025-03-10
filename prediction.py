from gradio_client import Client, handle_file

client = Client("Xefea/CatDog")

result = client.predict(
    #img=handle_file("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png"),
    img=handle_file("cat.jpg"),
    api_name="/predict"
)

print(result)