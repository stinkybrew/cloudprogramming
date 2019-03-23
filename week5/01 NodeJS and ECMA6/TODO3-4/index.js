
// w5 01 TODO2
var books = require('./books.js')

const input = process.openStdin() //INPUT !!!!

input.on('data', chunk => {
  const text = chunk.toString().trim()
  const space = text.indexOf(' ')
  const item = text.substring(space).trim()  
  if (text.indexOf('search ') === 0) {
    console.log('searching for "'+item+'"')
    /* Notice how the callback takes two parameters, an error and the data where a 
    non-null error parameter indicates an error has ocurred. */
    books.search(item, (err, data) => {
      if (err) {
        /* the message property contains the string passed to the error object. */
        console.log(err.message)
        return
      }
      console.log(JSON.stringify(data, null, 2))
    })
  }

  // GETTINF BOOK INFO!
  if (text.indexOf('info ') === 0) {
    console.log('getting info for "'+item+'"')
    books.info(item, (err, data) => {
      if (err) {
        console.log(err.message)
        return
      }
      console.log(JSON.stringify(data, null, 2))
    })
    describe('Book List', function () {
      it("Test length", function() {
        expect(item.length(12)); 
      });
      it("Test bookId", function() {
        expect(item.length(12)); 
      });
    })
  }

  if (text.indexOf('add ') === 0) {
    console.log('adding "'+item+'"')
    /* we wrap our code in a 'try' block */
    try {
      const result = books.add(item)
      console.log(result)
    } catch (err) {
      /* if an exception is thrown the program flow jumps to the 'catch' block, 
      the exception is stored in the 'err' parameter. */
      console.log(err)
    } finally {
      console.log('the list contains '+books.bookCount()+' books')
    }
  }

  // GOING TO BE DELETE BOOK FUNCTION
  if (text.indexOf('remove ') === 0) {
    console.log('removing "'+item+'"')
    /* we wrap our code in a 'try' block */
    try {
      const result = books.splice(item)
      console.log(result)
    } catch (err) {
      /* if an exception is thrown the program flow jumps to the 'catch' block, 
      the exception is stored in the 'err' parameter. */
      console.log(err)
    } finally {
      console.log('the list contains '+books.bookCount()+' books')
    }
  }
  // LETS ADD LIST request, so we can see what books we have in the list
  if (text.indexOf('list') === 0) {
    try {
      //console.log(books)
      for (let i=0; i< books.length; i++) {
        console.log(books[i])
      }
    } catch (err) {
      /* if an exception is thrown the program flow jumps to the 'catch' block, 
      the exception is stored in the 'err' parameter. */
      console.log(err)
    } finally {
      console.log('the list contains '+books.list+' books')
    }
	}

  if(text.indexOf("test") === 0) {
    try {
      /*describe("Testing dooks", function() {
        var a = "tBbsAgAAQBAJ"; var b = "tBbsAgAAQBAJHG";
        it("Add tBbsAgAAQBAJ", function() {
          expect(AddTwoBooks(a,b)).toEqual(7); 
        });
        it("Multiply Numbers", function() {
          expect(MultiplyBooks(a,b)).toEqual(12); 
        });
        it("Compare Numbers to be Greater Than", function() {
        expect(a).toBeGreaterThan(b); });
        it("Compare Numbers to be Less Than", function() {
        expect(b).toBeLessThan(a);
        });
      });*/
  
      describe ( function() {
        /* this code is run before each of the tests */
        beforeEach(() => {
          var a = text; 
          list.add(a)
        })
        it("Test length", function() {
          expect(a.length(12)); 
        });
        /* this code is run after EACH test */
        afterEach(() => {
          list.clear()
        })
      })
      console.log(result)
    } catch (err) {
      console.log(err)
    } finally {
      console.log('Testing done succesfully')
    }
  }
})