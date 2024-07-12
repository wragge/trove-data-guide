# Contributing to the Trove Data Guide

The Trove Data guide will continue to expand and evolve over time. Your contributions are very welcome!

## Share and reuse

The Trove Data Guide is openly licensed to encourage reuse. Feel free to copy content into your own teaching or research training materials. If you find something useful, please share it with others!

## Contribute ideas

If you have ideas for new topics or tutorials add them to the Trove Data Guide's [Ideas Board](https://github.com/wragge/trove-data-guide/discussions).

## Report errors

If you notice technical problems or content errors [raise an issue](https://github.com/wragge/trove-data-guide/issues) in the GitHub repository.

## Add or edit content

The Trove Data Guide is developed using [Jupyter Book](https://jupyterbook.org/en/latest/intro.html). Content is created in a series of Jupyter notebooks that are rendered as static HTML pages by the build process. If you want to contribute content you'll need to set up a Python virtual environment running Jupyter Book.

* [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the Trove Data Guide GitHub repository.
* [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the forked repository to your own computer, eg:    
  `git clone https://github.com/[your-user-name]/trove-data-guide.git`
* Move into the new directory:    
   `cd trove-data-guide`
* Create a Python virtual environment. I use [pyenv](https://github.com/pyenv/pyenv) and [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv) to create and manage Python versions and environments, eg:    
  `pyenv virtualenv 3.10.12 trove-data-guide`
* Activate the virtual environment:    
  `pyenv local trove-data-guide`
* Install `pip-tools`:    
  `pip install pip tools`
* Install all the necessary Python packages from the `requirements.txt` file:    
  `pip-sync requirements.txt`
* You can now start Jupyter Lab to create and edit content:    
  `jupyter lab`
* Run the `build` command to render your changes in Jupyter Book:    
  `jb build .`
* The build command will display a link to open the Jupyter Book in your browser.
* Commit your changes using git, then push them to your fork on GitHub.
* [Create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) to contribute your changes to the Trove Data Guide.
