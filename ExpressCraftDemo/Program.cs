using Bridge.Html5;
using ExpressCraft;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpressCraftDemo
{
    public class Program
    {
        public static void Main()
        {
            Settings.AllowCloseWithoutQuestion = true;
            if (Helper.NotDesktop)
            {
                Document.Head.AppendChild(
                    new HTMLMetaElement() { Name = "viewport", Content = "width=device-width,maximum-scale=1,minimum-scale=1" });
            }

            Application.Run(new frmHub());
        }
    }
}
