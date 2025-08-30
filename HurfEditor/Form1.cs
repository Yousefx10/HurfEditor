using Microsoft.Web.WebView2.Core;

namespace HurfEditor
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

            InitializeWebViewAsync();

        }




        private async void InitializeWebViewAsync()
        {
            await WebView.EnsureCoreWebView2Async(null);
            

            string webAppPath = Path.Combine(AppContext.BaseDirectory, "WebApp", "dist");

            WebView.CoreWebView2.SetVirtualHostNameToFolderMapping(
                "cm-app.local",
                webAppPath,
                CoreWebView2HostResourceAccessKind.Allow
            );

            WebView.CoreWebView2.Navigate("https://cm-app.local/index.html");
        }


    }
}
