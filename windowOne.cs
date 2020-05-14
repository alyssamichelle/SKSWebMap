using System;
using Mobilize.Web;
using Mobilize.WebMap.Common.Attributes;

namespace SKS {
  [Observable]
  public partial class WindowOne : Form {
    public WindowOne()
        : base()
    {
        InitializeComponent();
    }

    [Designer]
    private void InitializeComponent()
    {
      
      this.FormBorderStyle = FormBorderStyle.FixedDialog;
      this.MaximizeBox = true;
      this.MinimizeBox = true;
      this.Name = "WindowOne";
      this.Text = "WindowOne";
      this.Load   += new EventHandler(this.Form_Load);
      this.Closed += new EventHandler(this.Form_Closed);
    }

    private void Form_Load(object sender, EventArgs eventArgs)
    {
    }

    private void Form_Closed(object sender, EventArgs eventArgs)
    {
    }
  }

}