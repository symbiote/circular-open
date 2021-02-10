# User documentation
Circular open is built using [PyroCMS](https://pyrocms.com/ "Pyro"), for this documentation, we will be using a specific user that has only access to the content. This user has permission to:

- Add/edit pages
- Add blocks
- Reorder
- Add/edit stream entries
- Upload images/files

<p align="center">
  <img width="200" height="350" src="_images/1-pyro-sidenav.png">
</p>

Most the components for the website can be found in the sidebar:

- Designer - a list of data (stream) is a collection of data points that creates data as a whole. The designer stream is consists of bio, role, content, etc. 
- Event - same with a designer but has different fields mainly for event details.
- Files - a shortcut to uploading, reordering, and deleting images and files that can be reuse across the site.
- Redirects - adding redirects to pages
- Streams - the list of all streams used in the entire site
- Users - lists of users who have access to the site who has various user roles and permissions
- Waste material - category stream which is mainly used for designers stream

# Basic how to's:

#### How to login
To log in, add ‘/admin’ at the end of the url and you should have the form to login to the CMS.

<p align="center">
  <img width="500" height="340" src="_images/2-pyo-login.png">
</p>


> `Important note:` Make sure that your administrator has added you as a content author and activated your account to be able to log in. Once you have received your temporary credentials, you have to reset your password.

#### How to reset password
1. There are 2 ways of resetting the password;
Logged in - when you are logged in, you can head to the **Users** link from the side navigation and search for your name. Click the blue button and hit **Reset password**. A prompt message should appear and hit yes. A password reset link should be sent to your email.

<p align="center">
  <img width="600" height="100" src="_images/2.1-resetpassword.png">
</p>

2. Logged out - when you are logged out, you may hit the Reset password under the login form. Enter your email address and hit submit. You should get a password link sent to your email.

#### How to add pages
To create a new page, head to the sub-navigation and click **Pages**, click the ‘New Page’ button. A prompt should pop up to choose a page type. At this point, there is only a single page type which is the **Basic** page type. You can change the name of the page, the slug (URL) of the page will be simultaneously created.

<p align="center">
  <img width="500" height="350" src="_images/3-add-pages.png">
</p>

1. **Publishing** - if you create a page, it publishes the page publicly by default unless you switch the status in the Options tab. You can also set the date when you want to publish the page.

<p align="center">
  <img width="500" height="400" src="_images/4-publishing.png">
</p>

2. **Viewing the page** - to view the page, whether it is on the draft mode of public, you can check the page using the View button at the right bottom of the page.

<p align="center">
  <img width="200" height="200" src="_images/5-view-page.png">
</p>

3. Versions - you can check the versions of the pages, who updated or deleted the pages using the Version  button at the right bottom of the page. It will display a list of changes. 

> Important note: the system doesn’t allow you to see what changes have made. Please use with caution.

<p align="center">
  <img width="600" height="300" src="_images/6-versions.png">
</p>

#### How to add stream entries

What are streams? Streams are a collection of data points that creates data as a whole. Designer and Event are streams and they are consists of fields and blocks collected in data called **Entry**.

**Adding an entry:**

Head to the side navigation and click **Designer**, click **New** and fill in the fields.

<p align="center">
  <img width="600" height="300" src="_images/7-adding-entry.png">
</p>

#### How to add blocks
Blocks are movable components which are building blocks of a page. There are various types of blocks that are specifically built for certain layout and design.

**Adding a block on a page**

On the middle section of the page, under the **Content** field, click **Add block**. A prompt should display with a list of blocks available to add. The list of blocks is listed below including the example.

<p align="center">
  <img width="600" height="200" src="_images/8-adding-block.png">
</p>

# Blocks

**Banner**

To switch the background colour,  just simply toggle the **Switch** background and hit **update**.

<p align="center">
  <img width="600" height="300" src="_images/9-block-banner.png">
</p>

**Carousel**

There are 2 types of carousel we can add on pages. These carousels have only one source of data which is in the **Slides** streams.

<p align="center">
  <img width="600" height="300" src="_images/34-cms-carousel.png">
</p>

1. Default carousel - The main layout is an image on the left and text on the side.

<p align="center">
  <img width="600" height="300" src="_images/35-block-carousel.png">
</p>

2. Feature carousel - The block has 2 fields, one is the **label** which shows in the left on a stack and the **Slide** dropdown where you can choose which slide to display. The label also controls a slide meaning if you click the label it will transition to that label’s slide.

<p align="center">
  <img width="600" height="300" src="_images/36-page-carousel.png">
</p>

**Cards (4 columns)**

Tip: You can rearrange the cards using the move cursor.

<p align="center">
  <img width="400" height="300" src="_images/10-cms-4-cards.png">
  <img width="400" height="300" src="_images/11-fe-4-cards.png">
</p>

**Contact details**

Mainly displays the designer contact details. Note that you cannot reorder the details.

<p align="center">
    <img width="400" height="300" src="_images/12-fe-contact.png">
    <img width="400" height="300" src="_images/13-cms-contact.png">
</p>

**Designers (4 column photo)**

Four grid column of all designers in the entries added in the designer stream. Reordering is available and is documented below.


**Designers (3 columns)**

In contrast to the 4 columns, this block allows you to choose designers to display on the front-end.

<p align="center">
    <img width="400" height="300" src="_images/14-cms-3-column.png">
    <img width="400" height="300" src="_images/15-fe-3-column.png">
</p>

**Event list (2 columns)**

Same with the 3 columns, you can also choose the events to display. It will display as 2 grid column.

<p align="center">
    <img width="400" height="300" src="_images/16-cms-event.png">
    <img width="400" height="300" src="_images/17-fe-event.png">
</p>

**Full-width image**

Serves one image field and a title.

**Hero**

Title, subtitle, and content.

<p align="center">
  <img width="600" height="300" src="_images/18-fe-hero.png">
</p>

**Side by side (image and text)**

Tip: to switch the position of the image, just simply toggle the Switch position and hit update.

<p align="center">
  <img width="600" height="300" src="_images/19-fe-side-by-side.png">
</p>

**Videos 2 (column)**

Tip: You can copy and paster the youtube URL and it will automatically embed it. 

<p align="center">
  <img width="600" height="300" src="_images/20-fe-videos.png">
</p>


**Visit map**

The map is using [SnazzyMaps](https://snazzymaps.com/ "Named link title"). This map is combination of configs to make the look and feel and API key.

<p align="center">
  <img width="600" height="300" src="_images/21-fe-visit.png">
</p>

# How to reorder things
If you find yourself wanting to reorder blocks or streams, it’s actually easy to do. 

**Blocks**

If you wanted to rearrange the blocks, for this example, on the homepage, you can do so by moving the move cursor and using the drag-and-drop motion. To make reordering easier, you can **Double click** on the **black** bar to minimise the block. Once you have done your reordering, just simply hit update.

<p align="center">
  <img width="700" height="300" src="_images/22-reording.png">
</p>

**Streams**

Same as the other reordering, you can move the move cursor and drag-and-drop the data you want to reorder and hit **Reorder**, that will update the reordering mainly in the 4 column designer.

<p align="center">
  <img width="600" height="300" src="_images/23-streams-reordering.png">
</p>