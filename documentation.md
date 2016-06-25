#popup-tos

##Description
The popup-tos plugin was created to be a drop in plug'n play script that will force users to agree to the websites Terms of Service Agreement before continuing on with viewing the website.

##Usage
Using the script is as easy as copy and paste, then of course configuring it to your needs. First take the `tos-popup-plugin` folder from the demo folder on drop in the same directory your index.html or index.php file sit. Typically this is your websites root folder. Next is to drop this code anywhere inside of your html `body` tag.
  
    <div id="tos-modal-holder"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
    <script>
        $('#tos-modal-holder').load('tos-popup-plugin/tos-modal.html')
    </script>

##Configuration
The plugins configuration file is a simple `JSON` document with the following configuration settings. The file must be named `config.json` and must remain in the same directory as the plugin.

**`tos_header`**: The header text displated within the popup

**`tos_agreement`**: The HTML supported text that is your agreement, this must be an `array` of at least 1 `string`.
 
**`logo`**: Location of the image you want to display at the top of the TOS Agreement, usually a company logo. The location should be relative to where you dropped this plugin script.

**`forward_url`**: The URL to forward people to when they decline your TOS Agreement


Example of what the configuration file will look like.

    {
      "tos_header": "Terms of Service Agreement",
      "tos_agreement": [
    
        "<strong>Refund Policy</strong>",
    
        "Our refund policy is simple, no refunds, no warranty, this script is strictly use at your own risk.",
    
        "Acceptance",
    
        "BY USING AND/OR VISITING THIS WEBSITE (collectively, including all Content available through the NodeGeeks LLC domain name (nodegeeks.io, nodegeeks.com, nodegeeksllc.com), the 'NodeGeeks LLC Website', or 'Website'), YOU SIGNIFY YOUR ASSENT TO THESE TERMS AND CONDITIONS (the 'Terms of Use'). If you do not agree to any of these terms, then please do not use the NodeGeeks LLC Website. NodeGeeks LLC Website"
      ],
      "logo" : "./images/logo.jpg",
      "forward_url": "http://nodegeeksllc.com",
      "tos_cancel_btn": "Leave",
      "tos_accept_btn": "Enter"
    }

#TODO
* Implement Cookies
* Allow a `.txt` file or separate `.html` file to be used as the `tos_agreement` instead of the currently complicated array formatted value.
* Ability to have dynamic TOS with optional company name and url settings