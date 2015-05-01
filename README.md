#Crawl-shot - A website crawler and screenshot generator

###Installation

`npm install -g crawl-shot`

###Usage

####Basic Usage

`crawlshot -s 'http://example.com' -a 'example.com' -d 'screenshots'`
The following command will crawl http://example.com (restricted to the example.com domain) and save screenshots of each page to the screenshots directory within your CWD

####Options

- `-s`: Site URL
- `-a`: Allowed domain
- `-d`: Save directory
- `-w`: Window Width
- `-h`: Window Height
- `-r`: Number of milliseconds to wait before taking screenshot
- `-f`: Image file type (png, jpg)